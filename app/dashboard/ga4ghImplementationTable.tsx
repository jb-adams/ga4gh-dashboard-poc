import {useState } from 'react';
import {
    ButtonGroup,
    Heading,
    IconButton,
    Pagination,
    Separator,
    Stack,
    Table
} from "@chakra-ui/react";
import {
  LuChevronLeft,
  LuChevronRight
} from 'react-icons/lu';
import { type GA4GHServerImplementationList } from '../types/GA4GHServerImplementationList';

const divStyle = {
    marginTop: '50px',
    marginBottom: '50px'
}

interface Ga4ghImplementationTable {
  serverImplementations: GA4GHServerImplementationList;
}

export default function Ga4ghImplementationTable({serverImplementations}: Ga4ghImplementationTable) {
    const pageSize = 5;
    const count = serverImplementations.data.length;
    const [page, setPage] = useState(1);
    const startRange = (page - 1) * pageSize;
    const endRange = startRange + pageSize;
    const visibleItems = serverImplementations.data.slice(startRange, endRange);

    return (
        <div style={divStyle}>
          <Stack width="full" gap="5">
            <Heading size="lg">GA4GH Server Implementations</Heading>
            <Table.Root size="sm" variant="outline" striped>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader>Name</Table.ColumnHeader>
                  <Table.ColumnHeader>Type</Table.ColumnHeader>
                  <Table.ColumnHeader>Base URL</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {visibleItems.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.type}</Table.Cell>
                    <Table.Cell>{item.baseUrl}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>

            <Pagination.Root
              count={count}
              pageSize={pageSize}
              page={page}
              onPageChange={(e) => setPage(e.page)}
            >
              <ButtonGroup variant="ghost" size="sm" wrap="wrap">
                <Pagination.PrevTrigger asChild>
                  <IconButton>
                    <LuChevronLeft />
                  </IconButton>
                </Pagination.PrevTrigger>

                <Pagination.Items
                  render={(page) => (
                    <IconButton variant={{ base: "ghost", _selected: "outline"}}>
                      {page.value}
                    </IconButton>
                  )}
                />

                <Pagination.NextTrigger asChild>
                  <IconButton>
                    <LuChevronRight />
                  </IconButton>
                </Pagination.NextTrigger>

              </ButtonGroup>
            </Pagination.Root>

          </Stack>
          <Separator />
        </div>
    )
}