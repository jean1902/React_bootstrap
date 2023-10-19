import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../assets/django.jpg";
import img1 from "../assets/js.jpg";
import img2 from "../assets/canva.png";
import img3 from "../assets/CM.jpg";
import "../css/card.css";
export default function card() {
  return (
    <div className="container section_card">
      <h1 className="title-card">Formation</h1>
      <div className="row card_row">
        <Card className="card_box col-3">
          <Card.Img className="img-size" variant="top" src={img2} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button type="submit" variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>   
        <Card className="card_box col-3">
          <Card.Img className="img-size" variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Javascript </Card.Title>
            <Card.Text>
            JavaScript est un langage de programmation de scripts principalement employé dans
             les pages web interactives et à ce titre est une partie essentielle des applications web.
            </Card.Text>
            <Button type="submit" variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>  
        <Card className="card_box col-3">
          <Card.Img className="img-size" variant="top" src={img3} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button type="submit" variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>  
        <Card className="card_box col-3">
          <Card.Img className="img-size" variant="top" src={img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button type="submit" variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>       
        <Card className="card_box col-3">
          <Card.Img className="img-size" variant="top" src={img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button type="submit" variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>    
        <Card className="card_box col-3">
          <Card.Img className="img-size" variant="top" src={img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button type="submit" variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>    
        <Card className="card_box col-3">
          <Card.Img className="img-size" variant="top" src={img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button type="submit" variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>     
        <Card className="card_box col-3">
          <Card.Img className="img-size" variant="top" src={img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Django est un framework web open source en Python. Il a pour but de rendre le développement d'applications 
            web simple et basé sur la réutilisation de code.
            </Card.Text>
            <Button type="submit" variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>    
        <Card className="card_box col-3">
          <Card.Img className="img-size" variant="top" src={img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Django est un framework web open source en Python. Il a pour but de rendre le développement d'applications 
            web simple et basé sur la réutilisation de code.
            </Card.Text>
            <Button type="submit" variant="primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>    
      </div>
    </div>
  );
}
