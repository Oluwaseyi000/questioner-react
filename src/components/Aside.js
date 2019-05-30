import React from 'react';

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside-header">Upcoming Meetups</div>
      <div className="aside-body">
        <div className="aside-content upcoming-meetup">
          <p>
            {' '}
            Today: <span> 0</span>
          </p>
          <p>
            {' '}
            This Week:<span> 23</span>
          </p>
          <p>
            {' '}
            This Month:<span> 123</span>
          </p>
        </div>
        <div className="aside-header"> Your Stats</div>
        <div className="aside-body">
          <div className="aside-content">
            <p className="stats-list">
              Question Posted: <span>10</span>{' '}
            </p>
            <p className="stats-list">
              {' '}
              Question Commented On:<span> 23</span>{' '}
            </p>
            <p className="stats-list">
              {' '}
              Total Upvote:P <span>123 </span>{' '}
            </p>
            <p className="stats-list">
              Total Downvote: <span>34 </span>{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="aside-header">ADVERTS</div>
      <div className="aside-body">
        <img src="https://i.imgur.com/XaKeYJE.png" alt="advert" />
      </div>
    </aside>
  );
};

export default Aside;
