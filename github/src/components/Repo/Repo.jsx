import './Repo.scss';

const Repo = ({repo}) => {

    return <>
        <div className='repository'>
            <div>
                <a href="/">{repo.repo}</a>
                <span>{repo.status}</span>
            </div>

            <p>{repo.stack}</p>

        </div>
    </>

}

export default Repo