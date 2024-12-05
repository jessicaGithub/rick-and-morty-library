'use client';

import { SettingsIcon } from '@chakra-ui/icons';
import { Avatar, Heading } from '@chakra-ui/react';
import { getCookie } from 'cookies-next';
import Link from 'next/link';

export function Navbar () {
    const cookieVal = getCookie('userInfo');
    const userData = cookieVal ? JSON.parse(String(cookieVal)) : null;

    return (
        <nav>
            <div className="logo">
                <Link href="/characters">
                    <Heading as="h1" textStyle='brand'>Rick and Morty Library</Heading>
                </Link>
            </div>
            <Avatar name={userData?.username || <SettingsIcon />} />
        </nav>
    )
}