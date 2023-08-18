'use client'
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

type ProvidersProps = {
    children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    );
}

export default Providers;