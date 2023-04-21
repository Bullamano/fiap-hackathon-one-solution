import React from 'react';

import { InsiderHeader } from '../../Components/Header/Header';

import './AnalyticsPage.css'
import '../../App.css'

const AnalyticsPage = () => {
  return (
    <div className='analytics-screen'>
      <InsiderHeader />
      <div className='Contents'>
        Página de analytics
      </div>
    </div>
  );
};

export default AnalyticsPage;