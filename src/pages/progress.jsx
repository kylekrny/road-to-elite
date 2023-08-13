import Head from 'next/head'
import { Container } from '@/components/Container'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Per Mile Pace',
    },
  },
};

const labels = ['7/29/23']

export const data = {
  labels,
  datasets: [
    {
      label: 'Biking',
      data: [3.22],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Running',
      data: [9.51],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Swimming',
      data: [26.5],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

export default function Progress() {
  return (
    <>
      <Head>
        <title>Progress</title>
        <meta
          name="description"
          content="I’m Kyle. I write clean code, read economics book and obsess over pixels."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-8">
          <h1 className="w-3/4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Simple progress tracker to track key stats and figures.
          </h1>
          <div className="mt-6 w-full space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <Line options={options} data={data} />
          </div>
        </div>
      </Container>
    </>
  )
}
