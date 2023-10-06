export interface PaginationProps {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}
