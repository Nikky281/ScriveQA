# scriveqa
Scrive todo qa 

## This Repo contains - 
### Manual Functional Test
  1. Test cases  - ToDo-Test-Cases.xlx 
  2. Test Report - ToDo-Test-Report.docx
  
### Automation Test
  3. tests folder containing cypress Automation test

## Project description:
  ### Project is based on cypress (Using Javascript) and integrated Chai and mocha and Cucumber for BDD framework.
  ### feature files are kept in - '''ScriveQA/tests/cypress/integration/examples/todoqa/*.feature'''
  ### Following cases has been Automated :
      1. homepage.feature       - Validation of text Header, filters etc
      2. addtask.feature        - Verify task are being added successfully
      3. markcomplete.feature   - Verify task are maked completed are reflected in completed filter
      

## To Run Test via github action
1. Go To 'Actions' tab on Github Repo -
2. Go to (Click) on 'Scriveqa Cypress Tests' on Workflows (Left Side)
3. Click on 'Run Workflow' (on right side on portal)
4. Again click on 'Run workflow' button to trigger the TestCase
5. It may take few seconds, to reflect new run
6. Click on latest run

## To Set Up and Run Locally 
   Prerequisite - Node JS (Verify using --> node -v)

1. Clone the project
2. Go to tests folder using
   Run ```cd tests```
3. On Terminal 
   Run ```npm install```
4. Run ```npx cypress open```
5. A cypress client will open up. Click on E2E Testing
6. Click on browser of choice (say Chrome)
7. 'Start E2E Testing in Chrome'
8. In Browser, Specs You can see Specs (feature) files
9. Click and Run the specs
