import { useQuery } from "@tanstack/react-query";
import { Vendor } from "../lib/types";

export function useVendors() {
  return useQuery<Vendor[]>({
    queryKey: ['/api/vendors'],
  });
}

export function useVendorsByCuisine(cuisineType: string) {
  return useQuery<Vendor[]>({
    queryKey: ['/api/vendors/cuisine', cuisineType],
    enabled: !!cuisineType,
  });
}

export function useVendor(id: number | undefined) {
  return useQuery<Vendor>({
    queryKey: ['/api/vendors', id],
    enabled: !!id,
  });
}
