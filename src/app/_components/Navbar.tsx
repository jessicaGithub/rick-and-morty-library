import { Heading } from '@chakra-ui/react';
import Image from 'next/image';

export function Navbar () {
    return (
        <nav>
            <div className="logo">
                <Image width={200} height={200} src="/logo.jpg" alt="rick's image in the style of leonardo.ai logo" />
                <Heading as="h1" textStyle='brand'>Rick and Morty Library</Heading>
            </div>
        <ul>
            <li>Home</li>
            <li>Characters</li>
            <li>Episodes</li>
            <li>Locations</li>
        </ul>
        </nav>
    )
}