let tablo = ["https://i.pinimg.com/originals/fb/ab/f1/fbabf1f17e1b31410dd2dd878a02d381.jpg","https://i.pinimg.com/originals/1b/c6/70/1bc6704fd137191faa7375be2effc7be.jpg","https://i.pinimg.com/originals/39/d4/2e/39d42e071e0a09b69ac60e1144fafa44.jpg","https://i.pinimg.com/originals/22/c6/64/22c66474566d9d51f11e122a3ba17015.jpg","https://i.pinimg.com/originals/40/68/6f/40686ff225f7c48c9e6dad68a75da709.jpg","https://i.pinimg.com/originals/ba/50/0d/ba500d9e8d467a04d5a67b3281b72c10.jpg","https://i.pinimg.com/originals/56/0d/d2/560dd2ecc9d2e28a32b853f1b8aa4d7c.jpg","https://i.pinimg.com/originals/c9/9e/0c/c99e0c64ec6cf913978c3955475309c9.jpg","https://i.pinimg.com/originals/52/78/7b/52787b97debcd5af3e807fda55cc8fef.jpg","https://i.pinimg.com/originals/32/b3/98/32b3981b72b599092b1617a36274daa2.jpg","https://i.pinimg.com/originals/90/5e/29/905e299e118a7620ab4315b52f9bab61.jpg","https://i.pinimg.com/originals/ff/74/d8/ff74d8dcb6763dc20a2565c6e424d8cd.jpg","https://i.pinimg.com/originals/2f/08/89/2f08892d0509f0f9cedf8e864a953f5c.jpg","https://i.pinimg.com/originals/a0/86/aa/a086aa35b80da3990d5e785982b3db4e.jpg","https://i.pinimg.com/originals/c3/2b/34/c32b34c9725ecb86b1685504f65f010a.jpg","https://i.pinimg.com/originals/4e/d4/e5/4ed4e5ffe714464f4d36ce984874b9b6.jpg","https://i.pinimg.com/originals/41/10/a8/4110a8dadd09ef4e6ed3e463ab34d8bf.jpg","https://i.pinimg.com/originals/50/e0/fb/50e0fb67e915610f0282fd9b6022f0e6.jpg","https://i.pinimg.com/originals/e3/0d/44/e30d446bb4f3a76e67ebeadbea35e7b0.jpg","https://i.pinimg.com/originals/31/59/00/31590000a737fc1b1f7d8e8430449fb1.jpg","https://i.pinimg.com/originals/92/29/2e/92292ef7dbceaab6f456a6947d8b913e.jpg","https://i.pinimg.com/originals/b0/be/29/b0be2999f53aa59d3b21a56f31342d74.jpg","https://i.pinimg.com/originals/9c/64/75/9c64759a79406fe249206b44ff6cea47.jpg","https://i.pinimg.com/originals/f4/2e/e0/f42ee0df7de4be9dba1827027518be05.jpg","https://i.pinimg.com/originals/27/32/33/2732339436b55c85c9711485e4fb7dd4.jpg","https://i.pinimg.com/originals/ec/5f/4c/ec5f4c333a02d047b1d3f39b279d865a.jpg","https://i.pinimg.com/originals/c4/19/14/c4191436e6c502c03cee9e44d6f43c7c.jpg","https://i.pinimg.com/originals/f3/d4/61/f3d4619eca52d4bd8ed920c58a76f2c1.jpg"]
console.log(tablo[Math.floor(Math.random() * tablo.length)])
console.log(tablo.length)
module.exports.run = async (bot, message, args) => {
    
    return message.channel.send(("dance time", {files: [tablo[Math.floor(Math.random() * tablo.length)]]}))
}

module.exports.help ={
    name: "tablo"
}