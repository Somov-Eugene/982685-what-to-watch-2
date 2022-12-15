import { useState } from 'react';
import { Link } from 'react-router-dom';
import FilmTabOverview from '../film-tab-overview/film-tab-overview';
import FilmTabDetails from '../film-tab-details/film-tab-details';
import FilmTabReviews from '../film-tab-reviews/film-tab-reviews';
import { FilmType } from '../../types/films';
import { ReviewsType } from '../../types/reviews';
import { FilmTab } from '../../const';

type FilmTabsProps = {
  film: FilmType;
  reviews: ReviewsType;
}

function FilmTabs({ film, reviews }: FilmTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<FilmTab>(FilmTab.Overview);

  const navList: JSX.Element[] = Object.values(FilmTab).map((currentTab) => {
    const handleNavItemClick = (): void => setActiveTab(currentTab);

    return (
      <li
        key={currentTab}
        className={`film-nav__item${currentTab === activeTab ? ' film-nav__item--active' : ''}`}
        onClick={handleNavItemClick}
      >
        <Link className="film-nav__link" to="">{currentTab}</Link>
      </li>
    );
  });

  const renderActiveTab = (tab: FilmTab): JSX.Element => {
    switch (tab) {
      case FilmTab.Overview:
        return <FilmTabOverview film={film} />;
      case FilmTab.Details:
        return <FilmTabDetails film={film} />;
      case FilmTab.Reviews:
        return <FilmTabReviews reviews={reviews} />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {navList}
        </ul>
      </nav>

      {renderActiveTab(activeTab)}
    </div>
  );
}

export default FilmTabs;
