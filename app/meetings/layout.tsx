
export default function MeetingsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-[60vh] flex-col">
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}

