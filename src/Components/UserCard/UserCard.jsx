import './UserCard.css'

export default function UserCard() {
    return (
        <div className='card-container'>
            <img src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=' alt='' style={{width: '120px'}}/>
            <h1 style={{fontWeight: '700'}}>User Name</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non.
                </p>
        </div>
    )
}