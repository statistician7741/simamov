use simamov;
// show collections
// db.user.update({_id: ObjectId('597d4b39094160252c595640')}, {$set:{jenis: 1}})
// db.user.find().pretty()
// db.custom_entity.find({nip: '13.7960'}).pretty()
// db.pegawai.find({}).pretty()
// db.spj.find({})
// db.user.find().pretty()
// db.pegawai.update({}, {$set: {active: true}}, {multi: true});
// db.custom_entity.update(
//    {type: 'Penerima'},
//    { $set: { active: true } },
//    { multi: true }
// )

// db.old_pok_detailBelanja.drop()
// db.old_pok_akun.drop()
// db.old_pok_sub_komponen.drop()
// db.old_pok_komponen.drop()
// db.old_pok_sub_output.drop()
// db.old_pok_output.drop()
// db.old_pok_kegiatan.drop()
// show collections
// db.sppd.findOne({})
//==================================================
db.pok_detailBelanja.drop()
db.pok_akun.drop()
db.pok_sub_komponen.drop()
db.pok_komponen.drop()
db.pok_sub_output.drop()
db.pok_output.drop()
db.pok_kegiatan.drop()
db.pok_program.drop()
db.setting.drop()
db.custom_entity.drop()
//==================================================
// db.custom_entity.insert({nama: 'Abdul Ghofar S.Si, MTI.', type: 'Penerima'})
// db.setting_sppd.findOne()

// db.pegawai.drop()
// db.setting.drop()
// db.perhitungan.drop()
// db.surat_tugas.drop()

// db.setting_sppd.update({}, {$set: {last_nmr_surat: 897}})
// db.setting_sppd.findOne()

// db.custom_entity.find({type: 'tugas'}).pretty()
// db.kab.find().pretty()
// db.pok_uraian_akun.find({thang: '2017'})
// db.representasi.find().pretty()
// db.perhitungan.find().pretty()
// db.surat_tugas.find().pretty()
// db.setting.find().pretty()
// db.pok_uraian_akun.drop()
// db.pok_detailBelanja.find({_id: ObjectId('597e7bbc99046322fc06e85d')}).pretty()
// db.pok_akun.findOne({kdakun: '532111'})
// db.pok_sub_komponen.find({urskmpnen:'tanpa sub Komponen'}).pretty()
// db.pok_komponen.find().length()
// db.pok_sub_output.findOne()
// db.pok_output.findOne()
// db.pok_kegiatan.find()
// db.pok_program.findOne()
// db.kab.drop()

// db.old_pok_detailBelanja.find()
// db.old_pok_akun.findOne({'kdkmpnen': '002'})
// db.old_pok_sub_komponen.findOne()
// db.old_pok_komponen.findOne()
// db.old_pok_sub_output.findOne()
// db.old_pok_output.findOne()
// db.old_pok_kegiatan.findOne()
// db.old_pok_program.findOne() 1498667824 1498588982518

// db.pok_detailBelanja.aggregate(
//    [
//      {
//        $group:
//          {
//          	_id: {'kd':"$kdprogram", 'act':"$active"},
//            totalAmount: { $sum: "$jumlah" }
//          }
//      }
//    ]
// )

// show collections
// pok_detailBelanja v
// pok_akun
// pok_komponen v
// pok_output
// pok_kegiatan
// pok_program

// {
// 	"_id" : "521211.1",
// 	"version" : "1",
// 	"version_comment" : "Original",
// 	"create_date" : ISODate("2017-03-15T17:08:44.215Z"),
// 	"uraian" : "konsumsi seminar proposal penelitian (Snack)",
// 	"vol" : 675,
// 	"sat" : "O-K",
// 	"hrg_satuan" : 100000,
// 	"jlh" : 67500000,
// 	"old_ver" : [ ]
// }