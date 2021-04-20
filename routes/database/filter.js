const data = require('./data.json')

const filterData = {
    girls: 0,
    boys: 0,
    women: 0,
    men: 0,
    kg: 0,
    ru: 0,
    uz: 0,
    tj: 0,
    oth: 0,
    PEO: 0,
    CEC: 0,
    IV: 0,
    PS: 0,
    SV: 0,
    T: 0,
    HPEO: 0,
    SVEO: 0,
    PVEO: 0,
}

for(let key in data.xml){
    filterData.girls += +data.xml[key][0].total_stdnts_girls[0]
    filterData.boys += +data.xml[key][0].total_stdnts_boys[0]
    filterData.women += +data.xml[key][0].workers_in_fact_women[0]
    filterData.men += +data.xml[key][0].workers_in_fact_men[0]
    filterData.kg += +data.xml[key][0].stdnt_in_kg_classes[0]
    filterData.ru += +data.xml[key][0].stdnt_in_ru_classes[0]
    filterData.uz += +data.xml[key][0].stdnt_in_uz_classes[0]
    filterData.tj += +data.xml[key][0].stdnt_in_tj_classes[0]
    filterData.oth += +data.xml[key][0].stdnt_in_oth_classes[0]
    if (data.xml[key][0].institution_type == 'PRESCHOOL EDUCATIONAL ORGANIZATION')
        filterData.PEO++

    if (data.xml[key][0].institution_type == 'CHILDREN EDUCATIONAL CENTERS')
        filterData.CEC++

    if (data.xml[key][0].institution_type == 'INSTITIT VPO')
        filterData.IV++

    if (data.xml[key][0].institution_type == 'PRIMARY SECONDARY')
        filterData.PS++

    if (data.xml[key][0].institution_type == 'SPO_VPO')
        filterData.SV++

    if (data.xml[key][0].institution_type == 'TEST')
        filterData.T++

    if (data.xml[key][0].institution_type == 'HIGHER PROFESSIONAL EDUCATIONAL ORGANIZATION')
        filterData.HPEO++

    if (data.xml[key][0].institution_type == 'SECONDARY VOCATIONAL EDUCATIONAL ORGANIZATION')
        filterData.SVEO++

    if (data.xml[key][0].institution_type == 'PRIMARY VOCATIONAL EDUCATIONAL ORGANIZATION')
        filterData.PVEO++
}
module.exports = filterData