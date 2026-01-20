import {
    Heading,
    Separator
} from "@chakra-ui/react";

interface TotalImplementationsPanel {
    implementationCount: number;
}

const divStyle = {
    marginTop: '50px',
    marginBottom: '50px'
}

export default function TotalImplementationsPanel({implementationCount}: TotalImplementationsPanel) {
    return (
        <div style={divStyle}>
            <Heading>Total GA4GH Server Implementations</Heading>
            <Heading>{implementationCount}</Heading>
            <Separator />
        </div>
    );
}
