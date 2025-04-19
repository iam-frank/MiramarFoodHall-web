import { useQuery } from "@tanstack/react-query";
import { Event } from "../lib/types";

export function useEvents() {
  return useQuery<Event[]>({
    queryKey: ['/api/events'],
  });
}

export function useEvent(id: number | undefined) {
  return useQuery<Event>({
    queryKey: ['/api/events', id],
    enabled: !!id,
  });
}

export function useFeaturedEvents() {
  return useQuery<Event[]>({
    queryKey: ['/api/events/featured'],
  });
}
