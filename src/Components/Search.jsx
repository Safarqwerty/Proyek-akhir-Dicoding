import { MdSearch } from 'react-icons/md';

// eslint-disable-next-line react/prop-types
const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<MdSearch className='search-icons' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default Search;
