import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
     <h2 className="common-heading">Contact Page</h2>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.308968021221!2d73.75171247877499!3d18.600620537407934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9dc4ce5ac9f%3A0x7fdeb0087efc3a7f!2sPhoenix%20Mall%20of%20the%20Millennium!5e1!3m2!1sen!2sin!4v1741766886925!5m2!1sen!2sin" width="100%" height="400" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

     <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xyzeybgn" method="POST" className="contact-inputs">
            <input name="username" type="text" placeholder="username" required autoComplete="off"/>
            <input name="email" type="email" placeholder="email" required autoComplete="off"/>
            <textarea name="message" cols="30" rows="10" placeholder="ENter your message" required autoComplete="off"/>
            <input type="submit" value="SUBMIT"/>
        </form>
      </div>
     </div>
  </Wrapper>;
};

export default Contact;
