import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type SearchPaginationProps = {
  amount: number;
  rowsPerPage: number;
  page: number;
  onPageChange: (page: number) => void;
  mode?: "local" | "global";
};

// export function SearchPagination({ amount }: SearchPaginationProps) {
//   return (
    
//       <Pagination count={amount} color="primary" />
//     </Stack>
//   );
// }

export function SearchPagination({
  amount,
  rowsPerPage,
  page,
  onPageChange,
  mode = "local",
}: SearchPaginationProps) {
  const pageCount = Math.ceil(amount / rowsPerPage);

  if (pageCount <= 1) return null;

  return (
    <Stack spacing={2}><Pagination
      count={pageCount}
      page={page}
      onChange={(_, value) => onPageChange(value)}
      sx={{ mt: mode === "global" ? 4 : 2, display: "flex", justifyContent: "center" }}
    /></Stack>
    
  );
}