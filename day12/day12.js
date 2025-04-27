


const employees = [];



/**
 * Yeni personel eklendiğinde listesin değişmesi ve ui tarafında gösterilmesi
 */
function updateEmployeeList() {
    const employeeList = document.getElementById('employeeList')
    employeeList.innerHTML = '';

    // en yüksek maaştan en düşük maşa göre sıralama (Yuksek-Düşük desc) / (asc Düşük- Yüksek) 
    const sortedEmplooyes = employees.sort((a,b) => b.salary - a.salary)
    
    // Personelleri gruplama departmana göre 

 
    const employeesByDept = sortedEmplooyes.reduce((acc, emp) => {
        if(!acc[emp.department]) {
            
            acc[emp.department] = []
        }
        acc[emp.department].push(emp)
        return acc
    }, {})



    for(const dept in employeesByDept ) {
        const deptHeader = document.createElement('h3')
        deptHeader.textContent = `${dept} (${employeesByDept[dept].length} personel)`

        employeeList.append(deptHeader)


        employeesByDept[dept].forEach((emp,index) => {
            const employeeItem = document.createElement('div')
      
            employeeItem.innerHTML = `
             <strong>${emp.name}</stron><br>
             Maaş: ${emp.salary.toLocaleString('tr-TR')} TL <br>
             Deneyim: ${emp.experience}
            `
            '<div></div>'

            employeeList.append(employeeItem)

        })

     
    }


    // '
    // <h3>Satis 5 personel</h3>
    // '




   

}

function addEmployee (event) {
    event.preventDefault();

    // form verilerini al 
    const name = document.getElementById('name').value
    const department = document.getElementById('department').value;
    const salary = parseFloat(document.getElementById('salary').value) 
    const experience = parseInt(document.getElementById('experience').value)

    const employee = {
        name,
        department,
        salary,
        experience
    }

    employees.push(employee);
    
    // Eklenenleri göstermek 
    updateEmployeeList();


    event.target.reset();

 
 
} 


document.addEventListener('DOMContentLoaded', () => {

    //sayfa yüklendiyse,  güvenli alan

    document.getElementById('emlooyeForm').addEventListener('submit', addEmployee)

})