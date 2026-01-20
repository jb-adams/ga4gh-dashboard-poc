import {
    Heading,
    Separator
} from "@chakra-ui/react";

interface TotalImplementationsPanel {
    implementationCount: number;
}

export default function TotalImplementationsPanel({implementationCount}: TotalImplementationsPanel) {
    return (
        <div>
            <Heading>Total GA4GH Server Implementations</Heading>
            <Heading>{implementationCount}</Heading>
            <Separator />
        </div>
    );
}
