import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, phoneNumber, description, location, photoUrl, token } = body;

        // Form validasyonu
        if (!description || !location) {
            return NextResponse.json({ error: 'Eksik bilgi' }, { status: 400 });
        }

        // IP adresi tespiti
        const forwardedFor = request.headers.get('x-forwarded-for');
        const clientIp = forwardedFor ? forwardedFor.split(',')[0] : '127.0.0.1';

        // Veritabanına kaydet
        const { data, error } = await supabase
            .from('reports')
            .insert([
                {
                    first_name: firstName,
                    last_name: lastName,
                    phone_number: phoneNumber,
                    description,
                    location,
                    photo_url: photoUrl,
                    client_ip: clientIp,
                    status: 'pending', // Varsayılan hata durumu
                },
            ])
            .select();

        if (error) {
            console.error('Supabase Error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
    }
}
