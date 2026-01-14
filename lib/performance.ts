// Performance monitoring hook
export function usePerformanceMetrics() {
  if (typeof window === 'undefined') return null;

  const reportWebVitals = (metric: any) => {
    if (process.env.NODE_ENV === 'production') {
      // Send to analytics service
      const body = JSON.stringify(metric);
      navigator.sendBeacon('/api/metrics', body);
    }
  };

  return { reportWebVitals };
}

// Image loader for optimized images
export function landscapeImageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  return `${src}?w=${width}&q=${quality || 75}`;
}

// Prefetch utility
export function prefetchRoute(href: string) {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  }
}

// Lazy load utility with intersection observer
export function useLazyLoad(ref: React.RefObject<HTMLElement>) {
  if (typeof window === 'undefined') return;

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: '50px',
      threshold: 0.01,
    }
  );

  if (ref.current) {
    observer.observe(ref.current);
  }

  return () => observer.disconnect();
}
