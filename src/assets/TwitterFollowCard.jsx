export function TwitterFollowCard({usName,name,usTwitter,isFollowing}){
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={`https://unavatar.io/${usName}`} alt={name} />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">{usTwitter}</span>
                </div>
                
                
            </header>

            <aside>
                <button className="tw-followCard-button">Seguir</button>
            </aside>
        </article>
    )
}