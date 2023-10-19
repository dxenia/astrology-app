import { useState } from 'react';

import Button from '../../components/Button/Button.tsx';
import useFetch from '../../hooks/useFetch';
import FlipCard from '../../components/FlipCard/FlipCard.tsx';
import Loading from '../../components/Loading/Loading.tsx';
import { TarotProps } from '../../types/Tarot.types.ts';
import { Pagination } from '../../components/Pagination/Pagination.tsx';
import CardReading from '../../components/CardReading/CardReading.tsx';

import '../Tarot/Tarot.css';

export default function Tarot() {
  const [page, setPage] = useState(1);
  const [filterCriteria, setFilterCriteria] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 12;

  const url = 'https://jps-tarot-api.azurewebsites.net/api/Tarot/GetShuffled';
  const { data: cards, loading, error } = useFetch<TarotProps[]>(url);

  const filteredCards = cards?.filter((card) => {
    if (filterCriteria === 'All') {
      return card.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return (
      card.type === filterCriteria &&
      card.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const totalFilteredPages = Math.ceil(
    (filteredCards?.length || 0) / itemsPerPage
  );

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const cardsToDisplay = filteredCards?.slice(startIndex, endIndex) || [];

  if (page < 1) {
    setPage(1);
  } else if (totalFilteredPages && page > totalFilteredPages) {
    setPage(totalFilteredPages);
  }

  // if (error) {
  //   console.log(`Error: ${error.message}`);
  // }

  const handleFilterChange = (criteria: string) => {
    setFilterCriteria(criteria);
    setPage(1);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  return (
    <section className="tarot">
      <h1 id="tarots">Tarot Cards</h1>
      {error && <div>{error?.message}</div>}
      {loading && <Loading />}
      <div className="filter-buttons">
        <Button onClick={() => handleFilterChange('All')}>All Arcana</Button>
        <Button onClick={() => handleFilterChange('Major')}>
          Major Arcana
        </Button>
        <Button onClick={() => handleFilterChange('Minor')}>
          Minor Arcana
        </Button>
      </div>

      <div className="filter-input">
        <h3>Are you looking for a specific card?</h3>
        <span>Insert its name below.</span>
        <input
          type="text"
          placeholder="Search by name 🔍"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="card__list">
        {cardsToDisplay.map((card) => (
          <FlipCard key={card.id} card={card} />
        ))}
      </div>
      <Pagination
        page={page}
        totalPages={totalFilteredPages}
        handlePagination={setPage}
      />
      <CardReading />
    </section>
  );
}
