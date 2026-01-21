'use client';

import { Analytics } from '@shipixen/pliny/analytics';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { siteConfig } from '@/data/config/site.settings';

export const AnalyticsWrapper = () => {
    const analyticsConfig = siteConfig.analytics;

    return (
        <>
            {/* Vercel Analytics */}
            <VercelAnalytics />

            {/* Vercel Speed Insights */}
            <SpeedInsights />

            {/* Google Analytics (via Pliny) */}
            {analyticsConfig && <Analytics analyticsConfig={analyticsConfig} />}
        </>
    );
};
