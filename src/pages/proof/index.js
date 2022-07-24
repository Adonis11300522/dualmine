import React from "react";
import { Container, Row, Button } from "react-bootstrap";

export default function ProofPage() {
    return(
        <div className="ProofPage mt-5">
            <Container>
                <Row className="p-5">
                    <div className="fs-3 color-primary text-center">Proof of legal & payouts</div>
                    <div className="color-light-gary">We know that many people worry about mining sites that they will disappear or not paying. For that reason we want to show you that our company is legal and you don't need to worry about. The best way to trust us will be your research about our company. You will see on own eyes that everything is allright with our company. Please read and check all this informations below:</div>
                    <div className="color-light-gary">CRYPTONITS LTD is the owner of Dualmine.com and is the officially registered British company. All company activities comply with legal requirements of the Great Britain, where CRYPTONITS LTD. is registered. We have an office in London.</div>
                    <div className="color-light-gary my-5"><strong>Company Name: </strong><span> CRYPTONITS LTD.</span><br/><strong>Location: </strong><span> London, United Kingdom</span><br/><strong>REgistered office address: </strong><span> 20-22 Wenlock Road, London N1 7GU England</span><br/><strong>Company No: </strong><span> 11227979</span></div>
                    <div className="color-light-gary">Now please verify this informations in official documents:</div>
                    <div className="my-3">
                    <Button className="bg-gradient-r-p py-3 px-5 border rounded mt-3 me-3">VERIFY COMPANY INFO</Button>
                    <Button className="bg-gradient-r-p py-3 px-5 border rounded mt-3 me-3">CHECK COMPANY CERTIFICATE</Button>
                    <Button className="bg-gradient-r-p py-3 px-5 border rounded mt-3 me-3">CHECK WHO'S COMPANY DIRECTOR/CEO</Button>
                    </div>
                </Row>
            </Container>
        </div>
    )
}