import PropTypes from 'prop-types'

import QuoteItem from './QuoteItem'

function QuotesList({ phrases }) {

    console.log(phrases);

    return (
        <ul className='phrases__list'>
            {phrases.map((quote, idx) => 
                <li key={idx} className='phrase__card'>
                    <QuoteItem
                        quote={quote} />
                </li>
            )}
        </ul>
    )
}

QuotesList.propTypes = {
    phrases: PropTypes.array
}

export default QuotesList;