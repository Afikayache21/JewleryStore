import Card from 'react-bootstrap/Card';

function ContentCard({ title, content, name }) {
    return (
        <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', marginTop:'10px',}}>
            <Card.Header style={{color:'white'}}>{title}</Card.Header>
            <Card.Body style={{display:'flex',color:'grey' ,paddingLeft:'5rem',paddingRight:'3rem', fontSize: 'calc(5px + 2vw)'}}>
                <blockquote className="blockquote mb-0">
                    <p style={{paddingLeft:'10%',
                paddingRight:'10%'}}>
                        {content}
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default ContentCard;