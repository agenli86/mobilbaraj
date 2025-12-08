
import { createClient } from '@supabase/supabase-js';

// ÖNEMLİ: Kendi Supabase panelinizden aldığınız URL ve ANON KEY'i buraya yapıştırın.
// Şu an boş olduğu için çalışmayacaktır. Lütfen doldurun.
const SUPABASE_URL = 'BURAYA_SUPABASE_PROJECT_URL_GELECEK'; 
const SUPABASE_ANON_KEY = 'BURAYA_SUPABASE_ANON_KEY_GELECEK';

// Eğer keyler girilmemişse localStorage modunda çalışması için null döndürürüz
const isConfigured = SUPABASE_URL.includes('http');

export const supabase = isConfigured 
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
  : null;
