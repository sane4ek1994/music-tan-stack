import s from './Pagination.module.css'
import { PaginationNav } from './pagination-nav/pagination-nav.tsx'

type Props = {
  currentPage: number
  pagesCount: number
  onChangePageNumber: (page: number) => void
  isFetching: boolean
}

export const Pagination = ({ currentPage, pagesCount, onChangePageNumber, isFetching }: Props) => {
  return (
    <div className={s.container}>
      <PaginationNav current={currentPage} pagesCount={pagesCount} onChange={onChangePageNumber} />{' '}
      {isFetching && '⌛️'}
    </div>
  )
}
