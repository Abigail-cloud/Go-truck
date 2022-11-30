import { NavLink } from 'react-router-dom';

const Main = () => {
    return ( 
        <div>
        <h2>Working</h2>
        <ul class="list-group">
        <div><li class="list-group-item">Slack</li>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Rerum temporibus impedit assumenda ullam magni quo doloremque vero molestiae, officia quibusdam?</p>
        <button>Ios App</button>
        <button>andriod</button>
        </div>
        <div><li class="list-group-item">Google</li>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Rerum temporibus impedit assumenda ullam magni quo doloremque vero molestiae, officia quibusdam?</p>
        <button>Branding</button>
        
        </div>
        <div><li class="list-group-item">Twitter</li>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Rerum temporibus impedit assumenda ullam magni quo doloremque vero molestiae, officia quibusdam?</p>
        <button>Website</button>
        </div>
        
</ul>
        </div>
     );
}
 
export default Main;