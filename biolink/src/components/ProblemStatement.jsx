import React from 'react';
import MainProblem from './MainProblem';
import ProblemStatistics from './ProblemStatistics';
import EnvironmentProblem from './EnvironmentProblem';
import EnvironmentStatistics from './EnvironmentStatistics';

function ProblemStatement() {
    return (
        <div className="colored-section d-flex justify-content-around flex-wrap w-100 p-3 my-5">
            <MainProblem />
            <ProblemStatistics />
            <EnvironmentProblem />
            <EnvironmentStatistics />
        </div>
    );
}

export default ProblemStatement;