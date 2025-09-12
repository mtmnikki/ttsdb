"use client";

import { Button } from '@/components/ui/button';
import { useEmailSidebar } from '@/contexts/email-sidebar-context';
import { Menu } from 'lucide-react';
import React from 'react';

const EmailSidebarToggleButton = () => {
    const { openSidebar } = useEmailSidebar();

    return (
        <div className="flex justify-end mb-4">
            <Button className="bg-neutral-200 dark:bg-slate-600 xl:hidden lg:block" onClick={openSidebar}>
                <Menu className='w-4' />
            </Button>
        </div>
    );
};

export default EmailSidebarToggleButton;
