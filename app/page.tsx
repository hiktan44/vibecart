export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Welcome to VibeCart
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Modern e-commerce platform built with Next.js 15, Supabase, and Tailwind CSS v4
          </p>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <p className="text-card-foreground">
              Your application is running successfully!
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}