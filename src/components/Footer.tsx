export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Syeda Misha Shah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
