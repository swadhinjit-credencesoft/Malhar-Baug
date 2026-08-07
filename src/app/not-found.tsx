import Link from 'next/link';
import { AlertCircle, Home } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-accent" />
            <h1 className="text-2xl font-bold text-foreground">404 — Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
