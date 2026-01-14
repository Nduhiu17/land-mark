// Web Vitals callback
export function reportWebVitals(metric: {
  name: string;
  value: number;
  rating?: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  id: string;
}) {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'production') {
    // Send to your analytics endpoint
    const body = JSON.stringify(metric);
    
    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      navigator.sendBeacon('/api/web-vitals', body);
    } else if (typeof fetch !== 'undefined') {
      fetch('/api/web-vitals', {
        body,
        method: 'POST',
        keepalive: true,
        headers: { 'Content-Type': 'application/json' },
      }).catch(err => console.error(err));
    }
  }
}
