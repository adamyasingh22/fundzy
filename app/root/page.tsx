import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react';

const Home = () => {
    const loggedIn = { firstName: 'Adrin'};
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName|| 'guest'}
                    subtext="Handle your transcations efficiently"

                    />
                    <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.45}

                    />
                </header>
            </div>
        </section>
    );
}

export default Home;
