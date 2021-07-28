export default interface IPaginate<type> {
  flights: type[];
  pagesCount: number;
  totalItems: number;
}
