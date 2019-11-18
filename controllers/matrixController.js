exports.index = function(req, res, next){
    res.render('index', { title: 'Matrix Multiplication'});
}

exports.calculation = function(req,res,next){
    const scalar = req.query.scalar
    const matrix1 = req.query.matrix_1
    const matrix2 = req.query.matrix_2

    const results = checker(scalar, matrix1, matrix2)

    res.render('result', {results : results})
}


const matrixScalar = (scalar, matrices) => {
    return matrices.map(matrix => matrix.map(maxtrixValue => scalar * maxtrixValue))
}

const matrixMultiplication = (matrix1, matrix2) => {

    validation(matrix1, matrix2)

    const calculator = matrix1.map((m1, i) => {
        return(
            m1.map((valueM1, j)=>{
                return matrix2.map((m2, index) => {
                    return valueM1 * matrix2[index][j]
                })
            }).reduce((acc, next)=> {
                return next.map((n, nIndex) =>{
                    return acc[nIndex] + n
                })
            })
        )
    })

    return calculator
}

const checker = (scalar, matrix1, matrix2) => {
    return (
        scalar ? matrixScalar(scalar, matrix1) : matrixMultiplication(matrix1, matrix2)
    )
}

const validation = (matrix1, matrix2) => {
   
    const validatorArray = matrix1.length == matrix2.length ? matrix1.map((array, i)=>{
        return(array.length == matrix2[i].length ? array.map((item, j) =>{
            item ? true : throwError('Empty value in Matrix 1')
            matrix2[i][j] ? true : throwError('Empty value in Matrix 2')
        }) : false)
    }) : throwError('Matrix 1 length not the same with Matrix 2')

    return (
        !validatorArray.includes(false) ? true : throwError('Matrix 1 must to be the same array length as Matrix 2 or otherwise')
    )
}


const throwError = err => {
    throw new Error(err)
}