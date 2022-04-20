describe('Header test', () =>{
    beforeEach(() => {
        // const url =
        // "https://newsapi.org/v2/everything?" +
        // "q=Apple&" +
        // "from=2022-04-18&" +
        // "sortBy=popularity&" +
        // "apiKey=02d142c50d8b4247b974b25323435174";
        // cy.request(url).then((res) =>{
        //     console.log("responseeeeeeeee", res)
        // })
        // cy.log('I run before every test in every spec file!!!!!!')
        cy.visit('http://localhost:3000/login')
      })
    // it('Clarusway events', () => {
    //     cy.visit('http://localhost:3000/login')
    //     cy.log('Münir nasilsin')
    //     cy.wait(5000)
    //     cy.contains('CLARUSWAY NEWS').wait(2000).click()
    // })
    // it('Register control', () => {
    //     // Registere tıkladığımda url değişmeli
    //     cy.contains("Register").click().wait(2000)
    //     cy.url().should("include", "http://localhost:3000/register")
    //     cy.contains("Register").click().wait(2000)
    // });
/*     it('register with email', () =>{
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
            for(var ii=0; ii<8; ii++){
                string += chars[Math.floor(Math.random() * chars.length)];
            }
        var email = string +'@clarusway.com'
        cy.log(email);
        cy.contains('Register').click()
        cy.get('#email').type(email).
        cy.get('input[name="password"]').type(email)
        // click button
        cy.get('body').children('div').children('div').children('div').eq(1).children('div div').children('form').contains('Register').click()
    }) */

    it("register with email", () => {
        var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
        var string = "";
        for (var ii = 0; ii < 8; ii++) {
          string += chars[Math.floor(Math.random() * chars.length)];
        }
        var email = string + "@domain.com";
        cy.log(email);
    
        cy.visit("http://localhost:3000/register");
        cy.get("#email").type(email);
        cy.get("#password").type(email);
        // click button
        cy.get("button").contains("Register").click();
      });

   /*  it('login with email', () =>{
      var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
            for(var ii=0; ii<15; ii++){
                string += chars[Math.floor(Math.random() * chars.length)];
            }
        cy.log(string + '@domain.com');
        cy.visit('http://localhost:3000/login')
        // # idsi email olanı bul; . class olur
        cy.get('#email').type('example@gmail.com').should('have.value', 'example@gmail.com')
        cy.get('input[name="password"]').type('12345')
        // click button
        cy.get('button').contains('Login').click()
    }) */
  })