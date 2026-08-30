import { createClient } from '@supabase/supabase-js';
import type { Ordinance } from '../types/ordinance';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

export async function fetchOrdinances(): Promise<{ data: Ordinance[]; isMock: boolean }> {
  if (supabase) {
    try {
      // Query live ordinances table with linked categories
      const { data, error } = await supabase
        .from('ordinances')
        .select(`
          *,
          ordinance_category_links (
            ordinance_categories (
              name
            )
          )
        `)
        .order('ordinance_year', { ascending: false });

      if (!error && data && data.length > 0) {
        const normalizedData: Ordinance[] = data.map((item: any) => {
          // Extract categories from joined relation if available
          const linkedCategories: string[] = item.ordinance_category_links
            ?.map((link: any) => link.ordinance_categories?.name)
            .filter(Boolean) || [];

          return {
            ...item,
            categories: linkedCategories.length > 0 ? linkedCategories : (item.categories || []),
            co_authors: item.co_authors || item["co-authors"] || []
          };
        });

        return { data: normalizedData, isMock: false };
      }

      if (data && data.length === 0) {
        return { data: [], isMock: false };
      }
    } catch (err) {
      console.error("Supabase live database fetch error:", err);
    }
  }

  return { data: [], isMock: false };
}
