//write your code here to make the tests pass

class Document{
    constructor(EmployeeName){
        this.EmployeeName = EmployeeName

    }
}

class Employee{
    constructor(name){
        this.name = name

    }

    work(office){
        for (let i = 0; i < 10; i++) {
            const newDocument = new Document(this.name)
            office.documents.push(newDocument)
        }

    }
}


class Manager{
    constructor(name){
        this.name = name
        this.employees = []


    }

    hireEmployee(employeeName) {
        const newEmployee = new Employee(employeeName)
        this.employees.push(newEmployee)
    }

    askEmployeesToWork(office){
        this.employees.forEach(e => e.work(office))
    }
}

class Cleaner{
    constructor(name){
        this.name = name

    }

    clean(){
        console.log("Clean")
    }

}

class Office{
    constructor(){
        this.documents = []
        this.managers = []
        this.cleaners = []

    }

    hireManager(managerName) {
        const newManager = new Manager(managerName)
        this.managers.push(newManager)
    }

    hireCleaner(cleanerName) {
        const newCleaner = new Cleaner(cleanerName)
        this.cleaners.push(newCleaner)
    }

    startWorkDay(){
        this.managers.forEach(m => m.askEmployeesToWork(this))
        this.cleaners.forEach(c => c.clean())
    }
}

const employee = new Employee("Hadas")
const manager = new Manager("John")
const office = new Office()







