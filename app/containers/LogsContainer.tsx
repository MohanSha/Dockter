import React, { useState } from 'react';
import styles from './LogsContainer.css';
import LogsView from '../components/LogsView.tsx';
import Filter from '../components/Filter.tsx';
import Sort from '../components/Sort.tsx';

const LogsContainer = () => {
  const [sortBy, setSortBy] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    containerId: [],
    name: [],
    image: [],
    status: [],
    stream: [],
    timestamp: {
      from: '',
      to: '',
    },
    hostIp: [],
    hostPort: [],
    logLevel: [],
  });

  return (
    <div className={styles.container} data-tid="container">
      <h2>Logs Container</h2>
      <Filter
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />
      <Sort sortBy={sortBy} setSortBy={setSortBy} />
      <LogsView filterOptions={filterOptions} />
    </div>
  );
};

export default LogsContainer;