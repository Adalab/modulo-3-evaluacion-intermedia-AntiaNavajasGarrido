import PropTypes from "prop-types";


function QuoteItem({quote}) {

    return (
        <>
            <p>{quote.quote}</p>
            <h3 className="character__name">- {quote.character}</h3>
        </>
    )
}

QuoteItem.propTypes = {
    quote: PropTypes.shape({
        quote: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
    })
};

export default QuoteItem;