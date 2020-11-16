import React from 'react'
import Result from './Result'

const SearchResults = ({ results }) => {
        const renderResults = results.map((result, index)=> {
                return <Result key={index} result={result} />
        })
        return (
                <div className="search_results">
                        <ul>
                                {renderResults}
                        </ul>
                </div>
        )
}

export default SearchResults
