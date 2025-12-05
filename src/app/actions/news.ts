'use server'

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteNews(id: string) {
    const supabase = await createClient();

    try {
        // Auth kontrolü
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        console.log('Server Action - User:', user?.id, 'Auth Error:', authError);

        if (!user) {
            return { success: false, error: 'Oturum bulunamadı (Server)' };
        }

        const { error, count } = await supabase
            .from('news')
            .delete({ count: 'exact' })
            .eq('id', id);

        console.log('Server Action - Delete Result:', { error, count, id });

        if (error) {
            return { success: false, error: error.message };
        }

        if (count === 0) {
            return { success: false, error: 'Silinecek kayıt bulunamadı veya yetki yok (RLS).' };
        }

        revalidatePath('/admin/haberler');
        return { success: true };
    } catch (error) {
        console.error('Server Action - Unexpected Error:', error);
        return { success: false, error: 'Beklenmeyen bir hata oluştu' };
    }
}
