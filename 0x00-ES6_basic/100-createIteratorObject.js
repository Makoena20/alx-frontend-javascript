export default function createIteratorObject(report) {
    let allEmployees = [];

    // Iterate over each department in the report
    for (const department of Object.values(report.allEmployees)) {
        // Spread the employees of each department into the allEmployees array
        allEmployees = [...allEmployees, ...department];
    }

    // Return an iterator for the allEmployees array
    return allEmployees[Symbol.iterator]();
}

